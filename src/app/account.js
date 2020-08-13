
/*
export default class account {
   constructor(un,bd,a,e,p,v){
      t
   }

}*/

export class account {
  constructor(un,bd,a,e,p,v) {
    this.username  = un;
    this.birthdate = bd;
    this.age       = a;
    this.email     = e;
    this.password  = p;
    this.vaild    = v;
  }

  getUsername(){ return this.username;}
  getBirthdate(){ return this.birthdate;}
  getAge(){ return this.age;}
  getEmail(){ return this.email;}
  getPassword(){ return this.password;}
  getVaild(){ return this.vaild;}
}
