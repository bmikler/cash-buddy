package com.turbo.cash_buddy.security

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/api/v1")
class UserController {

    @GetMapping("/user-info")
    fun getUserInfo(principal: Principal): ResponseEntity<Map<String, String>> {
        return ResponseEntity.ok(mapOf("username" to principal.name))
    }
}