\c invoices

INSERT INTO invoices(createdAt, paymentDue, description, paymentTerms, clientName, clientEmail, isPaid, senderStreetAddress, senderCity, senderPostCode, senderCountry, clientStreetAddress, clientCity, clientPostCode, clientCountry) VALUES(
'2021-08-18', '2021-08-19', 'Re-branding', 1, 'Jenson Huang', 'jensenh@gmail.com', true, '19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom', '212 York Street', 'New York', '11201', 'United States' 
), ('2021-08-21', '2021-09-20', 'Graphic Design', 30, 'Alex Grim', 'alexgrim@gmail.com', false, '19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom', '1445 East 3rd Street', 'New York', '11230', 'United States'  )
