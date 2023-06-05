export interface UserInterface {
  name: string;
  age: number;
}

// email
// :
// "Sincere@april.biz"
// id
// :
// 1
// name
// :
// "Leanne Graham"
// phone
// :
// "1-770-736-8031 x56442"
// username
// :
// "Bret"
// website
// :
// "hildegard.org"

export interface RemoteUserInterface {
  address: any;
  //  {
  //   city: string;
  //   street: string;
  //   suite: string;
  //   zipcode: string;
  //   geo: {
  //     lat: string;
  //     lng: string;
  //   };
  // };
  company: any;
  // {
  //   bs: string;
  //   catchPhrase: string;
  //   name: string;
  // };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

// export type DataType = [
//   { a: number; b: boolean },
//   { user: string},
//   { c: number }
// ];

// export type DataTypeTwo = DataType | UserInterface | {id: string};

// export type DataTypeThree = DataTypeTwo[];

// export type DataTypeFourth = Pick<UserInterface, "age" | "name">;
