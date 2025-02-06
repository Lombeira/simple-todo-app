// @ts-check
import { test, expect } from '@playwright/test';

test('if the page renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Simple Todo App' })).toBeVisible();
  await expect(page.getByText('Please add to-dos item(s)')).toBeVisible();
});

test('if the user can add a todo', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Add todo...' }).click();
  await page.getByRole('textbox', { name: 'Add todo...' }).fill('Make exercises at least 2 times a day');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Make exercises at least 2')).toBeVisible();
});

test('if the user can add a todo with a assigned user', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Add todo...' }).click();
  await page.getByRole('textbox', { name: 'Add todo...' }).fill('Make exercises');
  await page.locator('#assignedTo').selectOption('3');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Glauco Doe' })).toBeVisible();
  await expect(page.getByText('Make exercises')).toBeVisible();
});

test('if the user can delete a todo', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('html').click();
  await page.getByRole('textbox', { name: 'Add todo...' }).click();
  await page.getByRole('textbox', { name: 'Add todo...' }).fill('test');
  await page.locator('#assignedTo').selectOption('3');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Glauco Doe' })).toBeVisible();
  await expect(page.getByText('test')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'Glauco DoeDeletetest' }).getByRole('button').click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Glauco Doe' })).not.toBeVisible()
});

