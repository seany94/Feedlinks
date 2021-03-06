-- createdb feedlinks -U sean
-- psql -d feedlinks -U sean -f tables.sql
-- psql -d feedlinks -U sean -f seed.sql

INSERT INTO users(name, photo_url, username, password) VALUES('Sean chan', 'https://ih1.redbubble.net/image.636118587.3338/flat,550x550,075,f.jpg', 'seanc', 'bd6e137c198e26a8bebe57a8f71a02bab613889ce4ebb51d03260492c875595f');
INSERT INTO users(name, photo_url, username, password) VALUES('Bat man', 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg', 'batm', '70a0b06e5791baa8e7bc960568ada7c37f7e698cc7ce871fff547576f6d7d1b9');
INSERT INTO users(name, photo_url, username, password) VALUES('Bell cranel', 'https://pm1.narvii.com/5820/05733a015822adb7ad626bbc330b3edcd0eb13d0_hq.jpg', 'bellc', '8999dee83e2adefb912e5546bdc1e082bfd9978713f8509edfa7ab2b9060098b');

INSERT INTO categories(title, user_id, date_added) VALUES('UK', 1, '2019-01-25');
INSERT INTO categories(title, user_id, date_added) VALUES('China', 1, '2019-02-10');
INSERT INTO categories(title, user_id, date_added) VALUES('World', 1, '2019-02-15');

INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('http://feeds.bbci.co.uk/news/world/rss.xml', 1, 3, '2019-02-25');
INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('http://feeds.bbci.co.uk/news/uk/rss.xml', 1, 1, '2019-02-25');
INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('http://www.chinadaily.com.cn/rss/china_rss.xml', 1, null, '2019-02-25');
INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('https://www.channelnewsasia.com/rssfeeds/8396082', 1, null, '2019-02-25');
INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('http://feeds.bbci.co.uk/news/politics/rss.xml', 1, null, '2019-02-25');
INSERT INTO feeds(feed_url, user_id, cat_id, date_added) VALUES('https://www.dailytelegraph.com.au/entertainment/music/rss', 1, null, '2019-02-25');