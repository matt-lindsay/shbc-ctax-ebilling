/* bloodhound-remote.js */
var addresses = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: './Api/AddressSearch?search=%QUERY',
        wildcard: '%QUERY'
    }
});

$('#custom-templates .typeahead').typeahead(null, {
    name: 'Uprn',
    displayKey: 'caption',
    source: addresses.ttAdapter(),
}).on('typeahead:selected', function (event, data) {
    $('.typeahead').val(data.address_data.address.lpi.uprn);
    $('#submit').prop('disabled', false);
});