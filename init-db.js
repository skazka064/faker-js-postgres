import { faker }  from '@faker-js/faker';
import postgres from 'postgres'

// Количество вставленных строк str >= 10  (вставка батчами по десять строк)
let str= 1000;


// Подключение к PostgreSQL
const sql = postgres('postgres://username:password@172.29.2.205:5432/database', {
  host                 : '172.29.2.205',            // virtBox
  port                 : 5432,                    // Postgres server port[s]
  database             : 'postgres',             // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : 'postgres',           // Password of database user
 
})

const now_Start = new Date();
console.log('Start: '+now_Start);
await sql `CREATE TABLE IF NOT EXISTS  users (userid text, username text, email text, avatar text, password text, birthdate text, registeredAt text);`;
await sql `CREATE TABLE IF NOT EXISTS company (department text, productname text, price text, productadjective text, productmaterial text, product text, productdescription text, isbn text)`
await sql `CREATE TABLE IF NOT EXISTS location (zipcode text, state text, city text, streetaddr text, longitude text)`

let j=0;
while( j<str/10){
  // ARRAY_USERS
  let userid=[];
  let username=[];
  let email=[];
  let avatar=[];
  let password=[];
  let birthdate=[];
  let registeredat=[];
  let str="";

  //ARRAY_COMPANY
  let department=[];
  let productname=[];
  let price=[];
  let productadjective=[];
  let productmaterial=[];
  let product=[];
  let productdescription=[];
  let isbn=[];

  //ARRAY_LOCATION
  let zipcode=[];
  let state=[];
  let city=[];
  let streetaddr=[];
  let longitude=[];  
  
  function createUser(){
  for(let i=0; i<10; i++){
     userid[i]=faker.string.uuid();
     username[i]=faker.internet.userName();
     email[i]=faker.internet.email();
     avatar[i]=faker.image.avatar();
     password[i]=faker.internet.password();
     birthdate[i]=faker.date.birthdate();
     registeredat[i]=faker.date.past();
     str=`('${userid[i]}', '${username[i]}', '${email[i]}', '${avatar[i]}', '${password[i]}', '${birthdate[i]}', '${registeredat[i]}')`+str;     
  }
  return str;
  }

  function createCompany(){
    for(let i=0; i<10; i++){
      department[i]=faker.commerce.department();
      productname[i]=faker.commerce.productName();
      price[i]=faker.commerce.price();
      productadjective[i]=faker.commerce.productAdjective();
      productmaterial[i]=faker.commerce.productMaterial();
      product[i]=faker.commerce.product();
      productdescription[i]=faker.commerce.productDescription();
      isbn[i]=faker.commerce.isbn();
      str=`('${department[i]}', '${productname[i]}', '${price[i]}', '${productadjective[i]}', '${productmaterial[i]}', '${product[i]}', '${productdescription[i]}, '${isbn[i]}')`+str;     
    }
    return str;
    }

    function createLocation(){
      for(let i=0; i<10; i++){
        zipcode[i]=faker.location.zipCode();
        state[i]= faker.location.state();
        city[i]= faker.location.city();    
        streetaddr[i]= faker.location.streetAddress();
        longitude[i]= faker.location.longitude() ;
        str=`('${zipcode[i]}', '${state[i]}', '${city[i]}', '${streetaddr[i]}', '${longitude[i]}')`+str;     
      }
      return str;
      }  
      
  let creaUser=createUser();
  let creaCompany=createCompany();
  let creaLocation=createLocation();

  await sql `INSERT INTO users  VALUES (${userid[0]},${username[0]},${email[0]},${avatar[0]},${password[0]},${birthdate[0]},${registeredat[0]}),(${userid[1]},${username[1]},${email[1]},${avatar[1]},${password[1]},${birthdate[1]},${registeredat[1]}),(${userid[2]},${username[2]},${email[2]},${avatar[2]},${password[2]},${birthdate[2]},${registeredat[2]}),(${userid[3]},${username[3]},${email[3]},${avatar[3]},${password[3]},${birthdate[3]},${registeredat[3]}),(${userid[4]},${username[4]},${email[4]},${avatar[4]},${password[4]},${birthdate[4]},${registeredat[4]}),(${userid[5]},${username[5]},${email[5]},${avatar[5]},${password[5]},${birthdate[5]},${registeredat[5]}),(${userid[6]},${username[6]},${email[6]},${avatar[6]},${password[6]},${birthdate[6]},${registeredat[6]}),(${userid[7]},${username[7]},${email[7]},${avatar[7]},${password[7]},${birthdate[7]},${registeredat[7]}),(${userid[8]},${username[8]},${email[8]},${avatar[8]},${password[8]},${birthdate[8]},${registeredat[8]}),(${userid[9]},${username[9]},${email[9]},${avatar[9]},${password[9]},${birthdate[9]},${registeredat[9]})`

  await sql `INSERT INTO location ("zipcode","state","city","streetaddr","longitude") VALUES (${zipcode[0]},${state[0]},${city[0]},${streetaddr[0]},${longitude[0]}),(${zipcode[1]},${state[1]},${city[1]},${streetaddr[1]},${longitude[1]}),(${zipcode[3]},${state[3]},${city[3]},${streetaddr[3]},${longitude[3]}),(${zipcode[4]},${state[4]},${city[4]},${streetaddr[4]},${longitude[4]}),(${zipcode[2]},${state[2]},${city[2]},${streetaddr[2]},${longitude[2]}),(${zipcode[6]},${state[6]},${city[6]},${streetaddr[6]},${longitude[6]}),(${zipcode[7]},${state[7]},${city[7]},${streetaddr[7]},${longitude[7]}),(${zipcode[8]},${state[8]},${city[8]},${streetaddr[8]},${longitude[8]}),(${zipcode[9]},${state[9]},${city[9]},${streetaddr[9]},${longitude[9]}),(${zipcode[5]},${state[5]},${city[5]},${streetaddr[5]},${longitude[5]})`;

   await sql `INSERT INTO company ("department","productname","price","productadjective","productmaterial","product","productdescription","isbn") VALUES (${department[0]},${productname[0]},${price[0]},${productadjective[0]},${productmaterial[0]},${product[0]},${productdescription[0]},${isbn[0]}),(${department[1]},${productname[1]},${price[1]},${productadjective[1]},${productmaterial[1]},${product[1]},${productdescription[1]},${isbn[1]}),(${department[2]},${productname[2]},${price[2]},${productadjective[2]},${productmaterial[2]},${product[2]},${productdescription[2]},${isbn[2]}),(${department[3]},${productname[3]},${price[3]},${productadjective[3]},${productmaterial[3]},${product[3]},${productdescription[3]},${isbn[3]}),(${department[4]},${productname[4]},${price[4]},${productadjective[4]},${productmaterial[4]},${product[4]},${productdescription[4]},${isbn[4]}),(${department[5]},${productname[5]},${price[5]},${productadjective[5]},${productmaterial[5]},${product[5]},${productdescription[5]},${isbn[5]}),(${department[6]},${productname[6]},${price[6]},${productadjective[6]},${productmaterial[6]},${product[6]},${productdescription[6]},${isbn[6]}),(${department[7]},${productname[7]},${price[7]},${productadjective[7]},${productmaterial[7]},${product[7]},${productdescription[7]},${isbn[7]}),(${department[8]},${productname[8]},${price[8]},${productadjective[8]},${productmaterial[8]},${product[8]},${productdescription[8]},${isbn[8]}),(${department[9]},${productname[9]},${price[9]},${productadjective[9]},${productmaterial[9]},${product[9]},${productdescription[9]},${isbn[9]})`

j++;
}

const now_end = new Date();
console.log('Finish: '+now_end);
await sql.end({ timeout: 5 })