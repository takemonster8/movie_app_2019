(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{21:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),m=t(3),c=t.n(m),o=t(14),l=t(15),u=t(16),v=t(19),d=t(17),p=t(20),g=t(18),y=t.n(g),_=t(2),f=t.n(_);function E(e){var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movie__title"},t),n.a.createElement("h5",{className:"movie__year"},a),n.a.createElement("ul",{className:"genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres_genre"},e)}))),n.a.createElement("p",{className:"movie__summary"},r.slice(0,180),"...")))}E.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,N=(t(46),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(v.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={isLoading:!0,movies:[]},t.getMovies=Object(o.a)(c.a.mark((function e(){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json");case 2:a=e.sent,r=a.data.data.movies,t.setState({movies:r,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("section",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1a1d80d1.chunk.js.map