var employees = [
    { id: 1, name: "tinu", managerId: null },
    { id: 2, name: "sai", managerId: 1 },
    { id: 3, name: "patter", managerId: 2 },
    { id: 4, name: "abhi", managerId: 3 },
    { id: 5, name: "shevil", managerId: 4 },
  ];


let firstLevelEmployees = employees.filter(emp => emp.managerId == null);

 var createAssign = (managers) => {managers.map(manager =>{manager.assinees=employees.filter(emp=>emp.managerId == manager.id);
        createAssign(manager.assinees);
        }) 
    };
    createAssign(firstLevelEmployees);
    console.log(JSON.stringify(firstLevelEmployees));
