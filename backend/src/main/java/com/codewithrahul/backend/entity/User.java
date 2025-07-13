package com.codewithrahul.backend.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String username;
     private String name;
     private String email;
}
