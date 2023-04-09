import React from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

function Table({ data }) {
   const columns = React.useMemo(
     () => [
       {
         Header: "First Name",
         accessor: "first_name",
         canSort: true,
         Filter: ({ column }) => (
           <input
             className="text-sm m-0 leading-[normal]"
             value={column.filterValue || ""}
             onChange={(e) => column.setFilter(e.target.value)}
             placeholder={`Filter ${column.Header}`}
           />
         ),
       },
       {
         Header: "Last Name",
         accessor: "last_name",
         canSort: true,
         Filter: ({ column }) => (
           <input
             className="text-sm m-0 leading-[normal]"
             value={column.filterValue || ""}
             onChange={(e) => column.setFilter(e.target.value)}
             placeholder={`Filter ${column.Header}`}
           />
         ),
       },

       {
         Header: "Gender",
         accessor: "gender",
         canSort: true,
         Filter: ({ column }) => (
           <input
             className="text-sm m-0 leading-[normal]"
             value={column.filterValue || ""}
             onChange={(e) => column.setFilter(e.target.value)}
             placeholder={`Filter ${column.Header}`}
           />
         ),
       },
       {
         Header: "Email",
         accessor: "email",
         canSort: true,
         Filter: ({ column }) => (
           <input
             className="text-sm m-0 leading-[normal]"
             value={column.filterValue || ""}
             onChange={(e) => column.setFilter(e.target.value)}
             placeholder={`Filter ${column.Header}`}
           />
         ),
       },
     ],
     []
   );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumnFilter: {},
      initialState: { pageIndex: 0, pageSize: data.length },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <>
      <div className="flex mb-4">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search table"
          className="px-4 py-2 w-full border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <table {...getTableProps()} className="w-full border-collapse">
        <thead
          className={`py-1 gap-7 flex items-center font-normal w-[1132px] font-['Inter'] text-[rgba(71,77,79,1)]`}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.canSort ? column.getSortByToggleProps() : {}
                  )}
                  className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-700 uppercase"
                >
                  {column.render("Header")}
                  <div>{column.render("Filter")}</div>
                  <span>
                    {column.canSort &&
                      (column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : "")}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-300">
          {rows.map((row, i) => {
            console.log(row);
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={
                  i % 2 === 0
                    ? "py-3 gap-7 flex items-center w-[1132px] bg-[rgba(230,230,230,1)]"
                    : "py-3 gap-7 flex items-center w-[1132px]  bg-white"
                }
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={`px-6 py-2 w-40 gap-2.5 text-sm m-0 leading-[normal]  text-black font-medium font-['Inter']`}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
