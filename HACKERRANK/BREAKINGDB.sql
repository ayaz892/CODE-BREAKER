Q:Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.

ANS:SELECT NAME FROM CITY WHERE COUNTRYCODE='USA' AND POPULATION>120000

Q:Query all columns for a city in CITY with the ID 1661.

ANS:SELECT *FROM CITY WHERE ID=1661

Q:Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.

ANS:/*
    Enter your query here and follow these instructions:
    1. Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
    2. The AS keyword causes errors, so follow this convention: "Select t.Field From table1 t" instead of "select t.Field From table1 AS t"
    3. Type your code immediately after comment. Don't leave any blank line.
*/
SELECT C.NAME FROM CITY C WHERE C.COUNTRYCODE='JPN';

Q;Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.

ANS:SELECT DISTINCT C.CITY FROM STATION C WHERE C.ID % 2=0;



