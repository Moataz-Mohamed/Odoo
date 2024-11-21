function create_car(manufacturer , model , capacity , tech , power , tourqe , color) {
    
       
          let car  = {

            manufacturer  : manufacturer ,
            model  : model ,
            motor_capacity  :capacity ,
            motor_tech  : tech  ,
            motor_power  : power  ,
            motor_torque  : tourqe  ,
            color  : color ,
        
                  printonfo : function(){
            
                        let info  = this.manufacturer  + " " + this.model + "\n"
                                + "Engine Type : "+ this.motor_capacity +" " + 
                                this.motor_tech + " " + this.motor_power + "hp " +
                                this.motor_torque + "Nm " + "\n" + "Color : "+ this.color + "\n"
                                +"-------------------------------------------------\n" ;

                        console.log(info);
                    
                        }
        
        };

        return car;


}

let malibu = create_car( "Chevrolet" , "Malibu" , 1500 , "Turbo" , 163 , 250 , "CHERRY RED"  );

let feugan = create_car( "Ford ", "Feugan" , 1500 , "Turbo" , 181 , 280 , "ALTO BLUE"  );

let avalon = create_car( "Toyota" , "Avalon" , 1600 , "Turbo" , 150 , 220 , "Silver"  );

//malibu.printonfo();

//feugan.printonfo();
//avalon.printonfo();
//feugan.color = "Iconic Metalic Silver";
//feugan.printonfo();

console.log(feugan.color); 