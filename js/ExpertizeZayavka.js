/**
 * Created by NSD on 25.04.17.
 */
function handleZayavka(inputRadio) {

    var list="";
    list += "  <div class=\"input-field col s12\">";
    list += "            <select multiple>";
    list += "                <option value=\"\" disabled selected>Оберіть пункти<\/option>";
    list += "                <option value=\"1\">Option 1<\/option>";
    list += "                <option value=\"2\">Option 2<\/option>";
    list += "                <option value=\"3\">Option 3<\/option>";
    list += "            <\/select>";
    list += "            <label>Materialize Multiple Select<\/label>";
    list += "        <\/div>";

    document.getElementById('zayavka_container').innerHTML = list;




}