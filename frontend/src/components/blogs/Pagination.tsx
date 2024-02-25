import { filterOptions } from "@/redux/blogs/blogActions";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pagination = () => {
    const {totalItems}=useAppSelector(store=>store.blogReducer);
    const param= useSearchParams();
    const dispatch= useAppDispatch();
    const [totalCount,setTotalCount]= useState(totalItems);
    const [itemsPerPage,setitemsPerPage]= useState(10);
    const [endPage,setEndPage]=useState(1);
    const [button,setButton]= useState([1]);
    const [currentPage, setCurrentPage] = useState<number>(Number(param.get("page"))||1);
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const maxButtonsToShow = 5;
    const handlePageChange = (pageNumber:number) => {
      setCurrentPage(pageNumber);
    };
    useEffect(()=>{
        const {arr,end}= getPageNumbers();
        setButton(arr);
        setEndPage(end);
        dispatch(filterOptions({page:currentPage}))
    },[currentPage])
    const getPageNumbers = () => {
        const range = Math.min(maxButtonsToShow, totalPages);
    const start = Math.max(1, currentPage - Math.floor(range / 2));
    const end = Math.min(start + range - 1, totalPages);
    const arr= Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return {arr,end};
    };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
            <li>
        <button disabled={currentPage<=1} onClick={()=>handlePageChange(currentPage-1)} className={`flex items-center justify-center px-3 ${currentPage<=1?"cursor-no-drop":"cursor-pointer"} h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>            
              Previous
          </button>
          </li>
         {
            button&&button.length>0&&button.map((el:number,i:number)=>{
                return <li key={i*5} className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage==el?"text-white":"text-gray-500"} ${currentPage==el?"bg-blue-400":"bg-white"} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`} onClick={()=>handlePageChange(el)}>
                  {el}
              </li>
            })
         }
          
          <li>
        <button disabled={currentPage>=endPage} onClick={()=>handlePageChange(currentPage+1)} className={`flex items-center justify-center px-3 ${currentPage>=endPage?"cursor-no-drop":"cursor-pointer"} h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>            
              Next
          </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
