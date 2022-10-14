# rotate-table

Rotate a series of tables by giving a CSV file as an input and get the result for all valid tables.

example matrix rotation:
original
```
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
```

rotated table
```
5 1 2 3
9 10 6 4
13 11 7 8
14 15 16 12

```
### Installing dependecies
```
npm install
```

### Running the project
You can run the project with the following command

```
node cli.js input.csv > output.csv
```

## Unit tests

Unit tests implemented for testing some scenarios.

Also there was unit test added with an example of a 10000 array length to test the performance with a huge array.

You can run it with the following command:

```
npm run test
```

--- 

## Basics

- #### Does the program run? `Yes`
- #### Does it read and output data we would like it to? `Yes`
- #### Is it properly formatted? `Yes`

&nbsp;

## Completeness

- #### Does it handle all the cases, including differing numbers of rows and columns, bigger and smaller tables, error cases you might come up with?
    `Yes it handles the cases and took into account for having different table's sizes. 
Error cases also are handled.`

- #### For the cases you are handling, are you handling them correctly? `Yes`

- #### How do you know this?
    `Unit tests already do the job, in plus I tried with many data.`

- #### Did you test against sample data? If so, please include it alongside your code.
    `Yes, you will find a "input.csv" file.`

- #### Did you write unit tests?  `Yes`
    
- #### How to run?
    `npm run test`

