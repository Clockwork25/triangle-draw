function Check (sideA,sideB,sideC) {
    const a = parseFloat(sideA)
    const b = parseFloat(sideB)
    const c = parseFloat(sideC)

    if (a+b > c || a+c>b || b+c>a){

        if (a==b || b==c || a==c){
            return console.log("Isosceles")
        }
    
        if (a==b==c){
            return console.log("equilateral")
        }
        if (a!==b && b!==c && a!==c){
            return console.log("scalene")
        }
    }else{
        return console.log("Not possible")
    }
}

export default Check;