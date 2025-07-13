package com.codewithrahul.backend.exception;

public class UserNotfoundException extends RuntimeException{

    public UserNotfoundException(Long id){
        super("could not found the with id "+id);
    }
}