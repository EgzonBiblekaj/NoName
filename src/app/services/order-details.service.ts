import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Sandwich Pule",
      foodDetails:"Sandwich Pule dhe pomfrit.",
      foodPrice:2,
      foodImg:"../../assets/img/sandwich.jpg"
    },
    {
      id:2,
      foodName:"Hamurger",
      foodDetails:"Hamburger, ajvar, turshi, sos",
      foodPrice:1.9,
      foodImg:"../../assets/img/burger.jpg"
    },
    {
      id:3,
      foodName:"Pizza",
      foodDetails:"Pice proshute, kepurdha, ullinj",
      foodPrice:2.5,
      foodImg:"../../assets/img/pizza.jpg"
    },
    {
      id:4,
      foodName:"Tost",
      foodDetails:"Tost pershute",
      foodPrice:1.5,
      foodImg:"../../assets/img/tost.jpg"
    },
    {
      id:5,
      foodName:"Pomfrit",
      foodDetails:"Pomfrit me djathe",
      foodPrice:1.5,
      foodImg:"../../assets/img/fries.jpg"
    },
    {
      id:6,
      foodName:"Ajron",
      foodDetails:"Ajron shtëpie",
      foodPrice:1,
      foodImg:"../../assets/img/jogurt.jpg"
    }
    
  ]
}
