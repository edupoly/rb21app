import React from 'react'

function App() {
  const [students, setStudents] = React.useState([
    {
        name: 'umasri',
        gender: 'female',
        url:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        address: {
            hn: 123,
            place: 'gachibowli'
        }
    },
    {
        name: 'Madhu',
        url:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        gender: 'female',
        address: {
            hn: 333,
            place: 'razole'
        }
    },
    {
        name: 'Karthik',
        gender: 'male',
        url:"https://plus.unsplash.com/premium_photo-1666866587910-2f333c109ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        address: {
            hn: 128,
            place: 'moosapet'
        }
    },
    {
        name: 'Vishwa',
        gender: 'male',
        url:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        address: {
            hn: 8888,
            place: 'miyapur'
        }
    },
    {
        name: 'shruti',
        url:"https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        gender: 'female',
        address: {
            hn: 444,
            place: 'manikonda'
        }
    },
])
  return (
    <div className='border border-2 border-success m-2 p-2 d-flex flex-wrap justify-content-center'>
      {
        students.map((student)=>{
          return (
            <div className='border border-1 border-danger m-2 p-2 w-25'>
              <h1>{student.name}</h1>
              <img src={student.url} alt="" className="w-100"/>
              <button>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App