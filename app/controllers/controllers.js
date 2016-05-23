form.controller('formController', ['$scope', '$state', '$q', '$localStorage', 'formService', function ($scope, $state, $q, $localStorage, formService){

    var vm = this;

    vm.starWarsMovies = formService.starWarsMovies;
    vm.tvShows = formService.tvShows;
    vm.foods = formService.foods;

    if ($localStorage.form)
    {
        vm.form = $localStorage.form;
        console.log(vm.form)
    }
    else
    {
        vm.form = {
            name: '',
            currentWatchingOnTv: [],
            favoriteStarWarsMovie: '',
            bolachaOrBiscoito: '',
            bestQuoteEver: '',
            favoriteFoods: []
        };
        $localStorage.form = vm.form
    }

    vm.title = 'Welcome';

    var getStarWarsMovieFromId = function (id)
    {
        for (var i = 0; i < vm.starWarsMovies.length; i++)
        {
            if (vm.starWarsMovies[i].id == id)
            {
                vm.form.favoriteStarWarsMovie = vm.starWarsMovies[i]
            }
        }
    };

    var initializeStep = function (step)
    {
        switch (step)
        {
            case '0':
            {
                vm.currentStep = step;
                vm.title = 'Welcome';
                vm.value= 0;
                break
            }
            case '1':
            {
                vm.currentStep = step;
                vm.title = 'Movies & TV';
                vm.value= 33;

                if (vm.form.favoriteStarWarsMovie.name)
                {
                    vm.form.favoriteStarWarsMovie = vm.form.favoriteStarWarsMovie.id
                }
                break
            }
            case '2':
            {
                vm.currentStep = step;
                vm.title = 'Food';
                vm.value= 66;
                break
            }
            case '3':
            {
                vm.currentStep = step;
                vm.title = 'Overview';
                vm.value= 100;
                getStarWarsMovieFromId(vm.form.favoriteStarWarsMovie);
                break
            }
            case '4':
            {
                vm.currentStep = step;
                vm.currentStep = $state.current.data.currentStep;
                vm.title = 'Thanks!';
                vm.done = true;
                break
            }
        }
    };

    vm.nextStep = function ()
    {
        switch (vm.currentStep)
        {
            case '0':
            {
                $state.go('form.step-one');
                initializeStep('1');
                break
            }
            case '1':
            {
                $state.go('form.step-two');
                initializeStep('2');
                break
            }
            case '2':
            {
                $state.go('form.step-three');
                initializeStep('3');
                break
            }
            case '3':
            {
                $state.go('form.thanks');
                initializeStep('4');
                break
            }
        }
    };

    vm.previousStep = function ()
    {
        switch (vm.currentStep)
        {
            case '1':
            {
                $state.go('form.welcome', {reload: true});
                initializeStep('0');
                break
            }
            case '2':
            {
                $state.go('form.step-one',  {reload: true});
                initializeStep('1');
                break
            }
            case '3':
            {
                $state.go('form.step-two',  {reload: true});
                initializeStep('2');
                break
            }
            case '4':
            {
                $state.go('form.step-three',  {reload: true});
                initializeStep('3');
                break
            }
        }
    };

    vm.querySearch = function (query, array)
    {
        var result = [];

        var lowercaseQuery = angular.lowercase(query);

        for( var i= 0, len = array.length; i < len; i++) {

            var el = angular.copy(array[i]);

            if( el.toLowerCase().indexOf(lowercaseQuery) > -1) {
                result.push( el );
            }
        }
        return result;
    };

    vm.restartForm = function ()
    {
        if ($localStorage.form)
        {
            delete $localStorage.form
        }

        vm.form = {
            name: '',
            currentWatchingOnTv: [],
            favoriteStarWarsMovie: '',
            bolachaOrBiscoito: '',
            bestQuoteEver: '',
            favoriteFoods: []
        };

        $state.go('form.welcome');
        initializeStep('0')
    };

    vm.toggle = function (item, list)
    {
        var idx = list.indexOf(item);

        if (idx > -1)
        {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };

    vm.exists = function (item, list)
    {
        return list.indexOf(item) > -1;
    };

    vm.isIndeterminate = function()
    {
        return (vm.form.favoriteFoods.length !== 0 &&
        vm.form.favoriteFoods.length !== vm.foods.length);
    };

    vm.isChecked = function()
    {
        return vm.form.favoriteFoods.length === vm.foods.length;
    };

    vm.toggleAll = function()
    {
        if (vm.form.favoriteFoods.length === vm.foods.length)
        {
            vm.form.favoriteFoods = [];
        }
        else if (vm.form.favoriteFoods.length === 0 || vm.form.favoriteFoods.length > 0)
        {
            for (var i = 0; i < vm.foods.length; i++)
            {
                if (vm.form.favoriteFoods.indexOf(vm.foods[i].name) < 0)
                {
                    vm.form.favoriteFoods.push(vm.foods[i].name)
                }
            }
        }
    };

    initializeStep($state.current.data.currentStep)

}]);