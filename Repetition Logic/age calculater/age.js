function calculateAge(birthDate) 
{
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) 
        {
        age--;
        }
    
    return age;
}

// Example usage
const birthDate = '1990-07-19'; // Format: YYYY-MM-DD
console.log(calculateAge(birthDate)); // Outputs the age





        document.getElementById('age-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const birthDate = document.getElementById('birthdate').value;
            const age = calculateAge(birthDate);
            document.getElementById('result').textContent = `Your age is ${age} years.`;
        });
