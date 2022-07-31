create table if not exists jlttgrocery.products
(
    id           serial
        constraint products_pk
            primary key,
    category     text,
    product_name text,
    price        double precision,
    description  text
);

alter table jlttgrocery.products
    owner to postgres;

create unique index if not exists products_id_uindex
    on jlttgrocery.products (id);

create table if not exists jlttgrocery.users
(
    id       serial
        constraint users_pk
            primary key,
    username text,
    password text
);

alter table jlttgrocery.users
    owner to postgres;

create table if not exists jlttgrocery.customers
(
    id            serial
        constraint customers_pk
            primary key,
    customer_name text,
    address       text,
    phone         text,
    email         integer,
    user_id       integer not null
        constraint customers_users_id_fk
            references jlttgrocery.users
);

alter table jlttgrocery.customers
    owner to postgres;

create unique index if not exists customers_id_uindex
    on jlttgrocery.customers (id);

create unique index if not exists customers_user_id_uindex
    on jlttgrocery.customers (user_id);

create unique index if not exists users_id_uindex
    on jlttgrocery.users (id);

create unique index if not exists users_username_uindex
    on jlttgrocery.users (username);

create table if not exists jlttgrocery.carts
(
    customer_id integer,
    product_id  integer,
    quantity    integer
);

alter table jlttgrocery.carts
    owner to postgres;

