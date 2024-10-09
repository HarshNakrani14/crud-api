import {useState} from "react";
import { postData } from "../API/PostApi";


function Forms({data, setData}) {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })

    const handleInputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setAddData((prev)=>{
            return {
                ...prev,
                [name]:value
            }

            
        })
    }

    const addPostData = async () => {
        const res = await postData(addData)

        if(res.status === 201){
            setData([...data, res.data])
            setAddData({title:"", body:""})
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addPostData()
    }



  return (
    <div className="my-6">
      <form onSubmit={handleFormSubmit} className="flex gap-4 flex-col md:flex-row justify-center items-center bg-gray-800 p-4 rounded-md shadow-lg">
        <div className="flex flex-col w-full md:w-1/3">
          <label htmlFor="title" className="text-white mb-1"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <label htmlFor="body" className="text-white mb-1"></label>
          <input
            type="text"
            autoComplete="off"
            id="body"
            name="body"
            placeholder="Add Post"
            value={addData.body}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none w-full md:w-auto">
          Add
        </button>
      </form>
    </div>
  );
}

export default Forms;
