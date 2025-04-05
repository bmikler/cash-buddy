package com.turbo.cash_buddy.expenses

import com.turbo.cash_buddy.expenses.controller.dto.CategoryDto
import com.turbo.cash_buddy.expenses.controller.dto.ExpensesSummaryDto
import com.turbo.cash_buddy.expenses.controller.dto.ExpenseItemDto
import org.springframework.stereotype.Component
import java.math.BigDecimal
import java.time.YearMonth
import java.util.*

@Component
class ExpenseService {

    private val mockExpenses: List<ExpensesSummaryDto> = listOf(
        ExpensesSummaryDto(
            category = CategoryDto(
                id = UUID.randomUUID(),
                name = "Groceries",
                type = CategoryDto.CategoryType.MONTHLY,
                limit = BigDecimal(500)
            ),
            balance = BigDecimal(200),
            expenses = listOf(
                ExpenseItemDto(
                    id = UUID.randomUUID(),
                    date = YearMonth.of(2023, 10),
                    description = "Walmart",
                    amount = BigDecimal(50)
                ),
                ExpenseItemDto(
                    id = UUID.randomUUID(),
                    date = YearMonth.of(2023, 10),
                    description = "Target",
                    amount = BigDecimal(30)
                )
            )
        )
    )

    fun getExpensesByMonth(date: YearMonth): List<ExpensesSummaryDto> {
        return mockExpenses
    }

}


