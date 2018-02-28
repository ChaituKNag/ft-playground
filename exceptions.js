let x = 0;

try {
    try {
        if(!isNaN(10/x)) {
            throw new Error("Number is not a known one");
        }
    } catch(err) {
        console.log("Error occurred: ", err);
        throw new Error("Throwing again from catch block");
    }
    
    finally {
        console.log("It ends here");
    }
} catch (error) {
    console.log("Caught in the outer catch", error);
}

finally{
    console.log("It really ends here");
}