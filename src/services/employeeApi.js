// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/employees/' }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => ``,
    }),
    addNewEmployee:builder.mutation({
        query:(newEmp)=>{
            return {
                url: "",
                method: 'POST',
                body: newEmp,
            }
        }
    }),
    deleteEmployeeById:builder.mutation({
        query:(emp)=>{
            return {
                url:`/${emp.id}`,
                method:'DELETE',
            }
        }
    }),
    updateEmployeeById:builder.mutation({
        query:(emp)=>{
            return {
                url:`/${emp.id}`,
                method:"PUT",
                body:emp
            }
        }
    }),
    getEmployeeById:builder.query({
        query:(id)=>{
            return {
                url:`/${id}`,
            }
        }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllEmployeesQuery,
    useAddNewEmployeeMutation,
    useDeleteEmployeeByIdMutation,
    useUpdateEmployeeByIdMutation,
    useGetEmployeeByIdQuery
} = employeesApi