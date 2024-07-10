

async function hello(){
    const input=document.getElementById("input").value.toLowerCase();
    
    const img=document.getElementById("img")
    const responce= await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    try{
       if(!responce.ok){
        throw new Error("api is not fetched")
       }
       const some= await responce.json();
       const something=some.sprites.front_default;
       img.src=something;
    }
    catch(error){
        console.log(error)
    }
}
