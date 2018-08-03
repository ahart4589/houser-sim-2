insert into houses(name, address, city, state, zip, image, monthlymortgage, desiredrent)
values ($1, $2, $3, $4, $5, $6, $7, $8);
select * from houses;