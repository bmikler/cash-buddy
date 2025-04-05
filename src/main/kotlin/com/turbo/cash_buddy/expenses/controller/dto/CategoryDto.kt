package com.turbo.cash_buddy.expenses.controller.dto

import java.math.BigDecimal
import java.util.UUID

data class CategoryDto(
    val id: UUID,
    val name: String,
    val type: CategoryType,
    val limit: BigDecimal,
) {
    enum class CategoryType {
        MONTHLY,
        ANNUAL
    }
}
