package com.turbo.cash_buddy.expenses.controller.dto

import java.math.BigDecimal


data class ExpensesSummaryDto (
    val category: CategoryDto,
    val balance: BigDecimal,
    val expenses: List<ExpenseItemDto>
)