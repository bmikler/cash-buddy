package com.turbo.cash_buddy.expenses.controller.dto

import java.math.BigDecimal
import java.time.YearMonth
import java.util.UUID

data class ExpenseItemDto(
    val id: UUID,
    val date: YearMonth,
    val description: String,
    val amount: BigDecimal,
)
