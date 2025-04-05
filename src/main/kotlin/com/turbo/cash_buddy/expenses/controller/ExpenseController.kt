package com.turbo.cash_buddy.expenses.controller

import com.turbo.cash_buddy.expenses.ExpenseService
import com.turbo.cash_buddy.expenses.controller.dto.ExpensesSummaryDto
import com.turbo.cash_buddy.expenses.controller.dto.ExpenseItemDto
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.YearMonth

@RestController
@RequestMapping("/api/v1")
class ExpenseController {

    private val service = ExpenseService()

    @GetMapping("/expenses")
    fun getExpensesForMonth(@RequestParam @DateTimeFormat(pattern = "MM-yyyy") date: YearMonth): List<ExpensesSummaryDto> {
        Thread.sleep(4000)
        return service.getExpensesByMonth(date)
    }

}