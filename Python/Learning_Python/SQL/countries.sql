
SELECT languages.language, languages.percentage , countries.name

FROM countries
JOIN languages

ON countries.id = languages.country_id

WHERE languages.language = "Slovene"
ORDER BY languages.percentage DESC;


-- 8)
-- SELECT countries.region, COUNT(countries.id)
--
-- FROM
--
-- GROUP by
