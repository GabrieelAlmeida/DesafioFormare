
export const isAuthenticated= () =>{

    if(localStorage.length === 0){
        return false;
    }else{
        return true;
    }


}