package com.turbo.cash_buddy.prototype

import org.springframework.http.ResponseEntity
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1")
class TestController {

    @GetMapping("/test")
    fun testController(token: JwtAuthenticationToken) : ResponseEntity<String> {
        val email = token.tokenAttributes["email"] as String
        return ResponseEntity.ok(email)
    }

}