\c invoices

INSERT INTO invoices(createdat, paymentdue, description, paymentterms, clientname, clientemail, ispaid, senderstreetaddress, sendercity, senderpostcode, sendercountry, clientstreetaddress, clientcity, clientpostcode, clientcountry) VALUES(
'2021-08-18', '2021-08-19', 'Re-branding', 1, 'Jenson Huang', 'jensenh@gmail.com', true, '19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom', '212 York Street', 'New York', '11201', 'United States' 
), ('2021-08-21', '2021-09-20', 'Graphic Design', 30, 'Alex Grim', 'alexgrim@gmail.com', false, '19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom', '1445 East 3rd Street', 'New York', '11230', 'United States');

INSERT INTO items(invoice_id, item_name, quantity, price, total) VALUES
 (1, 'Brand Guidelines', 1, 1800.90, 1800.90), (2, 'Banner Design', 1, 156, 156),
(2, 'Email Design', 2, 200, 400);


