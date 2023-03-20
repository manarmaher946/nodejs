function year(name, birthDate) {
    const today = new Date();
    if(birthDate.getFullYear() < today.getFullYear())
    {
        const age = today.getFullYear() - birthDate.getFullYear(); 
        console.log( `Hello ${name} and your Age Now Is : ${age}`);
    }
    else
    {
         console.log("Error");
    }
  }

  

  module.exports = {
	year
}