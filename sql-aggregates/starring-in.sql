select "genres"."name",
count (*) as "appearances"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "name"
