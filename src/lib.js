export const request = async function(url, options){
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""

    const response = await fetch(url, {
        heders: {
            "content-type":"application/json",
            "authorisation": token
        },
        ...options
    })
    
   if(!response.ok){
       const message = "not ok"
       throw new Error(message)
   }

   return response.json()
   
}