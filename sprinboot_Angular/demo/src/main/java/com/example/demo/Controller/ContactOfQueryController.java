// package com.example.demo.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.Entity.ContactOfQuery;
// import com.example.demo.Services.ContactOfQueryService;

// @CrossOrigin(origins = "http://localhost:4200") // Allow Angular app to access API
// @RestController
// @RequestMapping("/contactus")
// public class ContactOfQueryController {

//     @Autowired
//     private ContactOfQueryService service;

//     @PostMapping
//     public ContactOfQuery saveQuery(@RequestBody ContactOfQuery query) {
//         return service.saveQuery(query);
//     }
// }