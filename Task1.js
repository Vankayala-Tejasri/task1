choice=true
while(choice){
a=parseInt(prompt("enter mass of the human"))
b=parseInt(prompt("enter height of human in cm"))
bmi=a/(b/100)**2
    
    if(bmi<18.5)
{
    alert("you are underweight")    
}
else if(bmi<25){
    alert("you have normal weight")
}else if(bmi<29){
    alert("you are over weight")
    choice=prompt("do you want to continue please enter 1 for continue for end please type 0")
}

choices=prompt("do you want to continue please enter 1 for continue for end please type 0")
if(choices==0){
    choice=0;

}
}