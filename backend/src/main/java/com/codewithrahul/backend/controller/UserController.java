package com.codewithrahul.backend.controller;


import com.codewithrahul.backend.entity.User;
import com.codewithrahul.backend.exception.UserNotfoundException;
import com.codewithrahul.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://user-management-2-l8v9.onrender.com")
public class UserController {
    @Autowired
    private UserRepo userRepo;


    @PostMapping("/user")
    User newUser (@RequestBody User newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("user/{id}")
    User getuserBuId(@PathVariable Long id){
        return userRepo.findById(id)
                .orElseThrow(()->new UserNotfoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser (@RequestBody User newUser ,@PathVariable Long id ){
        return userRepo.findById(id)
                .map(user->{
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepo.save(user);
                }).orElseThrow(()-> new UserNotfoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if (!userRepo.existsById(id)){
            throw new UserNotfoundException(id);
        }
        userRepo.deleteById(id);
        return "User wit id "+id+" has been deleted success.";
        
    }
}
