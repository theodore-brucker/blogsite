import { useEffect, useState } from "react";

function FetchAPI() {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
      const response = await fetch("http://theobrucker.us/api/try")
      const data = await response.json()
      setBlogs(data)
    }
    
    useEffect(() => {
      fetchData()
    }, [])

    return blogs.map(blog =>
      <li key={blog.date}>
        <h1>
          {blog.title}
        </h1>
        <h3>
            {new Date(Date.parse(blog.date)).toLocaleDateString("en-US")}
        </h3>
        {blog.body}
      </li>
    )
  }

  export default FetchAPI;