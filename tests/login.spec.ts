import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
    test('successful login redirects to /books', async ({ page }) => {
        await page.goto('http://localhost:5173/');

        // Pegando pelo ID do input. # simboliza ID
        // await page.locator("#email").fill("test@mail.com")

        // Pegando pela Label do input
        // await page.getByLabel("Email").fill("test@mail.com")

        await page.fill('input#email', 'test@example.com');
        await page.fill('input#password', 'password123');

        // Pegando pelo texto do botão
        // await page.getByRole("button", { name: "Login" }).click()

        await page.click('button[type="submit"]');

        await expect(page).toHaveURL('http://localhost:5173/books');
    })
})

test.describe('Login Page', () => {
    test('successful login and search for unknown book', async ({ page }) => {
        await page.goto('http://localhost:5173/');
        await page.fill('input#email', 'test@example.com');
        await page.fill('input#password', 'password123');
        await page.click('button[type="submit"]');

        await expect(page).toHaveURL('http://localhost:5173/books');

        await page.getByPlaceholder("Digite o título do livro").fill("asdasdasd")
        await page.getByRole("button", { name: "Buscar" }).click()
        expect(page.getByText("Nenhum livro encontrado."))
    })
})