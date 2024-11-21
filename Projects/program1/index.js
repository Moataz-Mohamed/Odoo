function Car(manu , model , capacity , tech , power , tourqe , color){

        this.manufacturer  = manu ;
        this.model  = model ;
        this.motor_capacity  = capacity ;
        this.motor_tech  = tech  ;
        this.motor_power  = power  ;
        this.motor_torque  = tourqe  ;
        this.color  = color ;
        
        this.print_Info = function(){
            
                var info  = this.manufacturer  + " " + this.model + "\n"
                                + "Engine Type : "+ this.motor_capacity +" " + 
                                this.motor_tech + " " + this.motor_power + "hp " +
                                this.motor_torque + "Nm " + "\n" + "Color : "+ this.color + "\n"
                                +"-------------------------------------------------\n" ;

                console.log(info);
                    
                };

}

let malibu = new Car( "Chevrolet" , "Malibu" , 1500 , "Turbo" , 163 , 250 , "CHERRY RED"  );

malibu.print_Info();




  
  



