function f1 (){
    let count = 0;

    function increment(){
        count++;
    }
    
    function decrement(){
        count--;
    }
    
    function getCount(){
        return count;
    }
    
    return {increment, decrement, getCount };

};

