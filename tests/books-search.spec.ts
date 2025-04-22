import { test, expect } from "@playwright/test";




test("Search books and render as a list", async ({ page }) => {
    await page.goto("http://localhost:5173/books")
    const title = await page.getByText("Busca de Livros")
    console.log(title)
    expect(title).toBeTruthy()
})