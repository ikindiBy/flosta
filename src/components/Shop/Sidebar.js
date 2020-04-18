import React from 'react';
import { connect } from 'react-redux';

import { SHOW_ALL } from '../../constants';
import { groups } from '../../constants/data';

import { setVisibilityFilter } from '../../actions';
import FilterItem from './FilterItem';

const getFullId = (groupId, subGroupId) => {
    return subGroupId ? `${groupId}_${subGroupId}` : `${groupId}`;
}

const _Sidebar = ({visibilityFilter, changeActiveFilter}) => {
    const onFilterClick = (e, filter) => {
        changeActiveFilter(filter);
    }

    return (
            <div className='shop__sidebar'>
                <ul className='shop__first-level-list'>
                    <FilterItem
                        key={SHOW_ALL}
                        filterData={SHOW_ALL}
                        onClick={onFilterClick}
                        name="All products"
                    />
                    {groups.map(group => {
                        if (group.subGroup) {
                            return (
                                <>
                                    <FilterItem
                                        key={group.id}
                                        filterData={{group: group.groupId}}
                                        onClick={onFilterClick}
                                        name={group.name}
                                    />
                                    <ul className='shop__second-level-list'>
                                        {group.subGroup.map(subGroup => {
                                            return <FilterItem
                                                key={getFullId(group.groupId, subGroup.subGroupId)}
                                                filterData={{group: group.groupId, subGroup: subGroup.subGroupId}}
                                                onClick={onFilterClick}
                                                name={subGroup.name}
                                                />
                                        })}
                                    </ul>
                                </>
                            )
                        }
                        return (
                            <FilterItem
                                key={getFullId(group.groupId)}
                                filterData={{group: group.groupId}}
                                onClick={onFilterClick}
                                name={group.name}
                            />
                        )
                    })}
                </ul>
            </div>
    )
};

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter,
})

const mapDispatchToProps = dispatch => ({
    changeActiveFilter: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(_Sidebar)
