import { test } from "@playwright/test";

test.skip();            // all thte test in this file will be skipped

test('wiil not run 1', async () => {
    console.log("test 1");
    
})

test('wiil not run 2', async () => {
    console.log("test 2");
    
})

test.fixme('wiil not run 3', async () => {
    console.log("test 3");
    
})

test('wiil not run 4', async () => {

    test.fail();
    console.log("test 4");
    
})