import { test } from "@playwright/test";

test.describe.parallel('feature a group', () => {
    test('test 1', async () => {
        console.log('test 1');
    });
    
    test('test 2', async () => {
        console.log('test 2');
    });
    
    test('test 3', async () => {
        console.log('test 3');
    });
    
    test('test 4', async () => {
        console.log('test 4');
    });
    
    test('test 5', async () => {
        console.log('test 5');
    });
    
    test('test 6', async () => {
        console.log('test 16');
    });
})